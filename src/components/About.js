import React from 'react';
export const About = () => {
    return (
        <div>
            {/* <h2><b> GIỚI THIỆU </b></h2> */}
            {/* <p style={{fontStyle: 'italic'}}> Trần Thị Tứ Linh _ 4501104127</p>     */}
            <div className="row">
                {/* <div className="contain"> */}
                    <div className="column" style={{backgroundColor:'#aaaa'}}>
                        <h2 style={{alignItems: 'left'}}> About </h2>
                        <p style={{textAlign: 'left', textIndent: '1.5em'}}>Việc lập thời gian biểu sẽ giúp cho chúng ta những lợi ích tuyệt vời như: 
                        <br/>
                            <p style={{textIndent: '1.5em'}}>Giải quyết công việc theo trình tự, đảm bảo tiến độ đúng với quy định và cho hiệu quả công việc cao. 
                            Tất cả các công việc được giải quyết hoàn toàn, bạn sẽ không lo ứ đọng lượng việc cho ngày tiếp theo hay tuần tiếp theo 😊</p>
                            </p>
                    </div>
                    <div className="column" style={{backgroundColor:'#aaaa', textAlign: 'left'}}>
                        <h2>Personal Information</h2>
                        <p><b>NAME:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b> Trần Thị Tứ Linh </p>
                        <p><b>STUDENT ID: &emsp;&emsp;&emsp;</b> 4501104127 </p>
                        <p><b>AGE: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b> 21 </p>
                        <p><b>SCHOOL: &emsp;&emsp;&emsp;&emsp;&emsp;</b> HCMUE </p>
                        <p><b>ADDRESS: &emsp;&emsp;&emsp;&emsp;&nbsp;</b> BRVT </p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
} 