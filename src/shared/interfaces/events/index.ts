interface IEvent {
  visitorsCount: number;
  eventID: number;
  dateTime: string;
  description?: string;
  videofile: boolean;
  name: string;
}

export type { IEvent };
