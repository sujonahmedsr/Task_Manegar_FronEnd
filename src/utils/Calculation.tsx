/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllTaskQuery } from '@/Redux/Features/Task/taskApi';

const Calculation = () => {
    const { data: allTasks } = useAllTaskQuery(undefined)


    const totalTask = allTasks?.data?.length

    const completeTask = allTasks?.data?.filter((item: any) => item?.isCompleted)?.length

    const inCompleteTask = allTasks?.data?.filter((item: any) => !item?.isCompleted)?.length
    return {totalTask, completeTask, inCompleteTask, openTask: inCompleteTask}
};

export default Calculation;