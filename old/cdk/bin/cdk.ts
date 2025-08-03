#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WebsiteStack } from '../lib/stacks/website_stack';

const STACK_PROPERTIES = {
  env: { account: '590183929641', region: 'us-east-1' },
}

const app = new cdk.App()

new WebsiteStack(app, 'WebsiteStack', STACK_PROPERTIES)