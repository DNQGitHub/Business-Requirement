import Entity from './Entity';

export interface ISubscriberProps {
	name: string;
	email: string;
	phoneNumber: string;
	imageUrl: string;
}

export default class Subscriber extends Entity<ISubscriberProps> {
	static create(props: ISubscriberProps, id?: string) {
		return new Subscriber(props, id);
	}

	get name() {
		return this._props.name;
	}

	get email() {
		return this._props.email;
	}

	get phoneNumber() {
		return this._props.phoneNumber;
	}

	get imageUrl() {
		return this._props.imageUrl;
	}
}
