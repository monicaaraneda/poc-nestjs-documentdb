import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { Handler } from 'aws-lambda';

const expressApp = express();

const bootstrapServer = async () => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
};

let server: Handler;

export const handler: Handler = async (event, context, callback) => {
  if (!server) {
    await bootstrapServer();
    server = serverlessExpress({ app: expressApp });
  }
  return server(event, context, callback);
};
