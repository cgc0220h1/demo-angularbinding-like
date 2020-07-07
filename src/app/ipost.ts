import {IComment} from './icomment';

export interface IPost {
  id: number;
  title?: string;
  content?: string;
  comments?: IComment[];
}
