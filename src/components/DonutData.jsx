
import { Chart as ChartJS, ArcElement,Tooltip} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip);

const options = {
  maintainAspectRatio: false,
};
export function DonutData() {
  const rateAllData=useSelector((state)=>state.election.rateData)
  const hasRate=rateAllData &&(Number(rateAllData["投票率"])).toFixed(1)
  const data = {
  datasets: [
    {
      data: [(100-hasRate),hasRate],
      backgroundColor: ['#A6A6A6', '#D9D9D9'],
      borderColor: ['#A6A6A6', '#D9D9D9'],
      borderWidth: 1,
    },
  ],
};
  return <Doughnut data={data} options={options} width={136} height={136} />;
}
