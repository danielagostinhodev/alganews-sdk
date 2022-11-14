import Service from "../Service";
import {Metric} from "../@types";

class MetricService extends Service {
    static getTop3Tags(){
        return this.Http
            .get<Metric.EditorTagRatio>('/metrics/editor/top3-tags')
            .then(this.getData)
    }

    static getEditorMonthlyEarnings() {
        return this.Http
            .get<Metric.EditorMonthlyEarnings>('/metrics/editor/monthly-earnings')
            .then(this.getData)
    }

    static getMonthlyReveneusExpenses(){
        const headers = {
            'Content-Type' : 'application/json'
        }

        return this.Http
            .get<Metric.MonthlyRevenuesExpenses>('/metrics/monthly-reveneus-expenses', {headers})
            .then(this.getData)
    }

    static getMonthlyReveneusExpensesChartJs(){
        const headers = {
            'Content-Type' : 'application/vnd.alganews.chartjs+json'
        }

        return this.Http
            .get<Metric.MonthlyRevenuesExpenses>('/metrics/monthly-reveneus-expenses', {headers})
            .then(this.getData)
    }
}

export default MetricService