import { ILoading } from '@shared/interfaces/helper-interfaces';
import { IPost } from '@shared/interfaces/posts';

interface IPostsContextValue extends ILoading {
  data?: IPost[];
}

export type { IPostsContextValue };
