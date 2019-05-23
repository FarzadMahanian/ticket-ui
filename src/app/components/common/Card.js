import React from 'react';

class Card extends React.Component {
	render() {
		let { header, subHeader, children, footer } = this.props;
		return (
			<div className="card">

				<div className="header">
					<h4 className="title">{header}</h4>
					<p className="category">{subHeader}</p>
				</div>
				<div className="content">
					{ children }
					{
						footer ?
							(
								<div className="footer">
									<hr />
									<div className="stats">
										<i className="fa fa-clock-o"></i> Campaign sent 2 days ago
									</div>
								</div>
							) : null
					}
				</div>
			</div>
		);
	}
}

export { Card };