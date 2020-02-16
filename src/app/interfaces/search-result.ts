import { MetaData } from './meta-data';
import { SearchItem } from './search-item';

export interface SearchResult {
	meta: MetaData;
	data: Array<SearchItem>;
}
