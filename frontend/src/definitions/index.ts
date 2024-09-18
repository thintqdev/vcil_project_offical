export interface Program {
  id: number;
  name: string;
  short_description: string;
  description: string;
  image: string;
  slug: string;
  registration_link?: string;
}

export interface Lesson {
  name: string;
}

export interface Chapter {
  id: number;
  name: string;
  lessons: Lesson[];
}

export interface Class {
  id: number;
  name: string;
  chapters: Chapter[];
}
