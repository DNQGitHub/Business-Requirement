import Lodash from 'lodash';
import Ejs, { Options } from 'ejs';

export interface IGlobalData {
	[key: string]: any;
}

export default abstract class View<Data> {
	protected _resourcePath: string = '';
	protected _data: Data;

	constructor(data: Data) {
		this._data = data;
	}

	static get globalData() {
		return global as any['view-data'];
	}

	static set globalData(data: IGlobalData) {
		(global as any['view-data']) = data;
	}

	async render(opts?: Options): Promise<string> {
		const mergedData = Lodash.merge({ data: this }, View.globalData);
		const html = await Ejs.renderFile(this._resourcePath, mergedData, opts);
		return html;
	}
}
