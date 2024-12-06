import { IPost } from '@shared/interfaces/posts';
import { times } from 'lodash';

export const getPosts = (): Promise<IPost[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(
        times(5, (num) => ({
          postId: num.toString(),
          name: 'post ' + num,
          departmentId: num,
        }))
      );
    }, 500);
  });
};
