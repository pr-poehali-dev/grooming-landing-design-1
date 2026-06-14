import os
import urllib.request
import boto3
from botocore.client import Config

def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
    }

    # Handle CORS preflight
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": "",
        }

    # Get URL and key from query parameters
    query_params = event.get("queryStringParameters") or {}
    image_url = query_params.get("url")
    object_key = query_params.get("key", "grooming-hero.jpg")

    if not image_url:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": '{"error": "Missing required query parameter: url"}',
        }

    # Download the image
    try:
        request = urllib.request.Request(
            image_url,
            headers={"User-Agent": "Mozilla/5.0 (compatible; image-copy-bot/1.0)"},
        )
        with urllib.request.urlopen(request) as response:
            image_data = response.read()
            content_type = response.headers.get("Content-Type", "image/jpeg")
    except Exception as e:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": f'{{"error": "Failed to download image: {str(e)}"}}',
        }

    # Upload to S3
    aws_access_key_id = os.environ.get("AWS_ACCESS_KEY_ID")
    aws_secret_access_key = os.environ.get("AWS_SECRET_ACCESS_KEY")
    s3_endpoint = "https://bucket.poehali.dev"
    bucket_name = "files"

    try:
        s3_client = boto3.client(
            "s3",
            endpoint_url=s3_endpoint,
            aws_access_key_id=aws_access_key_id,
            aws_secret_access_key=aws_secret_access_key,
            config=Config(signature_version="s3v4"),
        )

        s3_client.put_object(
            Bucket=bucket_name,
            Key=object_key,
            Body=image_data,
            ContentType=content_type,
        )
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": f'{{"error": "Failed to upload to S3: {str(e)}"}}',
        }

    cdn_url = f"https://cdn.poehali.dev/projects/{aws_access_key_id}/bucket/{object_key}"

    return {
        "statusCode": 200,
        "headers": {
            **cors_headers,
            "Content-Type": "application/json",
        },
        "body": f'{{"url": "{cdn_url}"}}',
    }