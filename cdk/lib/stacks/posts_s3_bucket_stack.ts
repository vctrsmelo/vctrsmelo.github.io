import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class PostsS3BucketStack extends cdk.NestedStack {

    constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
        super(scope, id, props)

        new s3.Bucket(this, 'PostsBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY
        })
    }
}
