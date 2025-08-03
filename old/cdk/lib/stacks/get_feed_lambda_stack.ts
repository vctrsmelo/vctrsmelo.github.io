import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { join } from 'path';


export class GetFeedLambdaStack extends cdk.NestedStack {

    constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
        super(scope, id, props)

        const myFunction = new lambda.Function(this, 'GetFeedLambda', {
            runtime: lambda.Runtime.PYTHON_3_13,
            handler: 'get_feed.handler',
            code: lambda.Code.fromAsset(join(__dirname, '../lambda')),
        })
    }
}
