import { Reading } from './reading';
import { Translation } from './translation';

export interface SearchItem {
	slug: string;
	is_common: boolean;
	tags: Array<string>;
	jlpt: Array<string>;
	japanese: Array<Reading>;
	senses: Array<Translation>;
}
