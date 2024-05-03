export interface IToken {
  token: string;
}

export interface IUserData {
  username: string;
  password: string;
}

export interface ItemType {
  id: number;
  title: string;
  desc: string;
  priority: string;
  userPFP: string;
  CatTitle: string;
}

export interface TopItemType {
  id: number;
  CatTitle: string;
  color: string
}

export interface IBoardCreation {
  boardName: string;
  username: string;
}

export interface IUser {
  id: number;
  username: string;
  boardIDs: string;
  profileImg: string;
  accountCreated: boolean;
  password: string;
  salt: string;
  hash: string;
}
