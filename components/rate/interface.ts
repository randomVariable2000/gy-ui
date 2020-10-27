export interface gyRateProps{
	count?:number;
	value?:number;
	half?:boolean;
	clear?:boolean;
	onChange?:(value: number) => void;
	character?:string | React.ReactNode;
	disabled?:boolean;
}