import { Entities, HttpAttributes, ImageUrls } from './common.models';

export interface MemberInfo {
  title: string;
  description: string;
  link: string;
  text: string;
}

export interface MemberCard {
  block: MemberInfo;
  imageUrl: ImageUrls;
}

export interface MemberAttributes extends HttpAttributes {
  memberCards: Entities<MemberCard>;
}
