
def handler(event, context):
    print("Hello from Python Lambda!")
    return {"statusCode": 200, "body": "Hello from Python!"}