import * as path from 'path';
import * as fs from 'fs';

const NB_PARAMS_EXPECTED = 2;

function getParamsFromArguments(): string[] {
  const [execPath, executedFilePath, ...params] = process.argv;
  return params;
}

function expectParamsToHaveRightLength (params: string[]): void {
  const hasRightParamsLength = params.length === NB_PARAMS_EXPECTED;
  if (!hasRightParamsLength) {
    throw new Error(`Expected ${NB_PARAMS_EXPECTED} parameters, got ${params.length}: ${params.join(', ')}`);
  }
}

function expectPathsToBeRelative (params: string[]): void {
  const everyParamStartsWithRelativePath = params.every((param) => param.startsWith('./'));
  if (!everyParamStartsWithRelativePath) {
    throw new Error(`Parameters should be relative paths, but they do not start with './': ${params.join(', ')}`);
  }
}

function expectParamsToHaveIntegrity(params: string[]): void {
  expectParamsToHaveRightLength(params);
  expectPathsToBeRelative(params);
}

function getAbsolutePathsFromRelativePath(relativePath: string): string {
  return path.join(__dirname, '../../', relativePath);
}

function expectPathToExist(inputJsonFilePath: string): void {
  const fileExists = fs.existsSync(inputJsonFilePath);
  if (!fileExists) {
    throw new Error(`${inputJsonFilePath} does not exist on your computer. Please check you're using a relative path from the root of the project.`);
  }
}

function expectOutputFilePathToHaveIntegrity(outputFilePath: string): void {
  const arrayPath = outputFilePath.split('/');
  arrayPath.pop();
  const folderPath = arrayPath.join('/');

  const folderExists = fs.existsSync(folderPath);
  if (!folderExists) {
    throw new Error(`${folderPath}/ does not exist on your computer, please create it first. Also, please check you're using a relative path from the root of the project.`);
  }

  const fileExists = fs.existsSync(outputFilePath);
  if (fileExists) {
    throw new Error(`${outputFilePath} already exists on your computer, please change it. Also, please check you're using a relative path from the root of the project.`);
  }
}


export function getPathsFromArgumentsAndCheckIntegrity(): {
  inputJsonFilePath: string;
  outputFilePath: string;
} {
  const params = getParamsFromArguments();
  expectParamsToHaveIntegrity(params);
  const absolutePaths = params.map(getAbsolutePathsFromRelativePath);
  const [inputJsonFilePath, outputFilePath] = absolutePaths;
  expectPathToExist(inputJsonFilePath);
  expectOutputFilePathToHaveIntegrity(outputFilePath);
  return { inputJsonFilePath, outputFilePath };
}