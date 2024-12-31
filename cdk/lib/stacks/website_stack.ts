import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GetFeedLambdaStack } from './get_feed_lambda_stack';
import { GetPostLambdaStack } from './get_post_lambda_stack';
import { PostsDynamoStack } from './posts_dynamo_stack';
import { PostsS3BucketStack } from './posts_s3_bucket_stack';

export class WebsiteStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
  
        new GetFeedLambdaStack(this, 'FeedLambda', props)
        new GetPostLambdaStack(this, 'PostLambda', props)
        new PostsDynamoStack(this, 'PostsDynamo', props)
        new PostsS3BucketStack(this, 'PostsS3', props)
    }
}