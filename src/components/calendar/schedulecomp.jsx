import React from 'react';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda } from '@syncfusion/ej2-react-schedule';


function CalendarComp() {
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
						<ScheduleComponent>
							<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
						</ScheduleComponent>
					</div>
				</div>
				</div>
			</div>
		</section>
    );
}

export default CalendarComp