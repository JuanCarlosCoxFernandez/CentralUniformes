
import jsreport from '@jsreport/browser-client';
import { Button } from 'antd';

jsreport.serverUrl = 'http://localhost:5488/'
const Reports = () => {
    const generateR = async () => {
        const report = await jsreport.render({
            template: {
                shortid: 'RT0TK-P2C'
            },
            data: {
                 token: localStorage.getItem('token')
            }
        })
        //descargar automatico
        //report.download('myreport.pdf')

        report.openInWindow({title: 'myreport.pdf'})
    }

    return (<Button onClick={generateR}>Generate Report</Button>)
}


export default Reports;
