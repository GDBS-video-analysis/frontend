import { IEmployee } from '@/app/shared/interfaces/employee';
import { IVideo } from '@/app/shared/interfaces/video';
import { FormControl, FormGroup } from '@angular/forms';

interface IEvent {
  event_id: string;
  name: string;
  date_time?: string;
  description?: string;
  videofile?: IVideo;
  scheduled_visitors: IEmployee[];
}

type IUpdateEventForm = FormGroup<{
  event_id: FormControl<string | null>;
  name: FormControl<string | null>;
  date: FormControl<string | null>;
  description: FormControl<string | null>;
  time: FormControl<string | null>;
}>;

type IEventPort = Omit<IEvent, 'scheduled_visitors' | 'videofile'>;

export { IEvent, IUpdateEventForm, IEventPort };
