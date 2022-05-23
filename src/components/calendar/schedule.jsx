import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarGfg() {
    const [value, onChange] = useState(new Date());

    return (
		<section className="blog-pg blog section-padding pt-0">
			<div className="container">
				<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="sec-head text-center">
					<h3 className="wow color-font">
						Schedule
					</h3>
					</div>
				</div>
				</div>
			</div>
			<div className="container">
				<div className="posts">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<Calendar
							onChange={onChange}
							value={value}
						/>
					</div>
				</div>
				</div>
			</div>
		</section>
    );
}

export default CalendarGfg