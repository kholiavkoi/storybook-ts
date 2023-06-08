type Props = {
	/** some description */
	variant?: 'green' | 'red' | 'yellow'
}

/** This is my Light Component */
export const Light = ({ variant = 'green' }: Props) => {
	return (
		<div style={{ background: variant, borderRadius: '50%', width: 50, height: 50 }}></div>
	);
};
