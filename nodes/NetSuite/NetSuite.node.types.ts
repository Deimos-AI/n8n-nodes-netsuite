import { IExecuteFunctions, INodeExecutionData, JsonObject } from 'n8n-workflow';

export type INetSuiteCredentials = {
	accountId: string;
	consumerKey: string;
	tokenKey: string;
	consumerSecret: string;
	tokenSecret: string;
	netsuiteQueryLimit?: number;
	hostname: string;
};

export type INetSuiteOperationOptions = {
	item?: INodeExecutionData;
	fns: IExecuteFunctions;
	credentials: INetSuiteCredentials;
	itemIndex: number;
};

export enum NetSuiteRequestType {
	Record = 'record',
	SuiteQL = 'suiteql',
	Workbook = 'workbook',
}
export type INetSuiteRequestOptions = {
	nextUrl?: string;
	method: string;
	body?: any;
	headers?: any;
	query?: any;
	path?: string;
	requestType: NetSuiteRequestType;
};

export type INetSuiteResponse = {
	statusCode: number;
	statusText: string;
	body: INetSuiteResponseBody;
	headers: any;
	request: any;
};

export type INetSuiteResponseBody = {
	statusCode: number;
	title?: string;
	code?: string;
	body: JsonObject;
	'o:errorCode'?: string;
	'o:errorDetails'?: INetSuiteErrorDetails[];
	message?: string;
};

export type INetSuiteErrorDetails = {
	detail: string;
};

export type INetSuitePagedBody = {
	hasMore: boolean;
	items: JsonObject[];
	nextUrl?: string;
	links: INetSuiteLink[];
	count?: number;
	totalResults?: number;
	offset?: number;
};

export type INetSuiteLink = {
	rel: string;
	href: string;
};
