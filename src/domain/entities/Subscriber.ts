import Entity from './Entity';

export interface ISubscriberProps {
	name: string;
	email: string;
	phoneNumber: string;
	imageUrl: string;
	createdDate?: Date;
	updatedDate?: Date;
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

	get createdDate() {
		return this._props.createdDate;
	}

	get updatedDate() {
		return this._props.updatedDate;
	}

	updateName(name: string) {
		this._props.name = name;
		this._props.updatedDate = new Date();
	}

	updatePhoneNumber(phoneNumber: string) {
		this._props.phoneNumber = phoneNumber;
		this._props.updatedDate = new Date();
	}

	updateImageUrl(imageUrl: string) {
		this._props.imageUrl = imageUrl;
		this._props.updatedDate = new Date();
	}
}
