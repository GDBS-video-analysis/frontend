import { IEvent, IEventPort } from '@/app/shared/interfaces/event';
import { Injectable } from '@angular/core';
import { random, times } from 'lodash';
import { Observable, Subject } from 'rxjs';

const generateVisitors = () => {
  return times(random(5, 20), (n) => ({
    employee_id: random(200, 1000).toString(),
    firstname: 'Jhon',
    lastname: 'Doe' + random(10, 100),
    patronymic: 'Jhon',
    post: {
      post_id: '123456',
      name: 'Уборщик общественных территорий',
      department_id: 1,
    },
    biometrics: '',
    is_deleted: false,
    email: 'JhonDoe@gmail.com',
  }));
};

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  event$ = new Subject<IEvent>();

  getEvent(eventId: string): void {
    setTimeout(() => {
      this.event$.next({
        event_id: '15f9ce4a-64a6-4ed1-a019-c4ab26ad5048',
        name: 'Хэллоуин',
        description: 'Описание страницы',
        date_time: '2024-11-27 13:30:00',
        videofile: {
          name: 'Хэллоуин что-то еще длинное название',
          size: '3 GB',
          video_duration: '02:45:34',
          url: '',
          date: '2024-11-28',
        },
        scheduled_visitors: generateVisitors(),
      });
    }, 1500);
  }

  addScheduledVisitors(visitorsIds: string[]) {}

  deleteScheduledVisitor(visitorId: string) {}

  updateEvent(port: IEventPort) {}

  deleteEvent(eventId: string) {}
}
