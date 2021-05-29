import axios from 'axios';
import *  as math from 'mathjs'

const DATA_IN_ORDER = 'http://localhost:8080/sortDetective/getSortData?algName=&listSize=&buttonAlgorithm=&listType=InOrder'
const DATA_ALMOST_IN_ORDER = 'http://localhost:8080/sortDetective/getSortData?algName=&listSize=&buttonAlgorithm=&listType=AlmostInOrder'
const DATA_REVERSE_ORDER = 'http://localhost:8080/sortDetective/getSortData?algName=&listSize=&buttonAlgorithm=&listType=ReverseOrder'
const DATA_RANDOM_ORDER = 'http://localhost:8080/sortDetective/getSortData?algName=&listSize=&buttonAlgorithm=&listType=RandomOrder'
var CancelToken = axios.CancelToken;
var source = CancelToken.source();
const parser = math.parser()
class DataService {
    
    getInOrder(listSize, buttonAlgorithm){
        
        return axios.request(DATA_IN_ORDER.replace(/algName=&listSize=&buttonAlgorithm=/, "algName=" + buttonAlgorithm + "&listSize=" + listSize + "&buttonAlgorithm=" + buttonAlgorithm), {
            cancelToken: source.token
        }).then(response => {
            var data = []
            var labels = []
            var avgCaseLabel, worstCaseLabel, bestCaseLabel
            var avgCaseData, worstCaseData, bestCaseData = []
            var algorithmExplanation = response.data["SortInfo"]

            data.push(response.data["Movements:"])
            data.push(response.data["Comparisons:"])
            data.push(response.data["Time:"])
            labels.push("In Order")
            
            avgCaseLabel = response.data["AvgCase"]
            worstCaseLabel = response.data["WorstCase"]
            bestCaseLabel = response.data["BestCase"]

            avgCaseData = this.getCaseData(avgCaseLabel, 5)
            worstCaseData = this.getCaseData(worstCaseLabel, 5)
            bestCaseData = this.getCaseData(bestCaseLabel, 5)
            
            
           
            return [data,labels, avgCaseLabel, avgCaseData, worstCaseLabel, worstCaseData,
            bestCaseLabel, bestCaseData, algorithmExplanation]
        }).catch(response =>{
            var labels = []
            var data = []
            labels.push("In Order(Cancelled)")

            return [data, labels]
            
        })
        
    }
    getAlmostInOrder(listSize, buttonAlgorithm){

        return axios.get(DATA_ALMOST_IN_ORDER.replace(/algName=&listSize=&buttonAlgorithm=/, "algName=" + buttonAlgorithm + "&listSize=" + listSize + "&buttonAlgorithm=" + buttonAlgorithm), {
            cancelToken: source.token
        }).then(response => {
            var data = []
            var labels = []
            var avgCaseLabel, worstCaseLabel, bestCaseLabel
            var avgCaseData, worstCaseData, bestCaseData = []
             var algorithmExplanation = response.data["SortInfo"]
            data.push(response.data["Movements:"])
            data.push(response.data["Comparisons:"])
            data.push(response.data["Time:"])
            labels.push("Almost In Order")

            avgCaseLabel = response.data["AvgCase"]
            worstCaseLabel = response.data["WorstCase"]
            bestCaseLabel = response.data["BestCase"]

            avgCaseData = this.getCaseData(avgCaseLabel, 5)
            worstCaseData = this.getCaseData(worstCaseLabel, 5)
            bestCaseData = this.getCaseData(bestCaseLabel, 5)
            
            
           
            return [data,labels, avgCaseLabel, avgCaseData, worstCaseLabel, worstCaseData,
            bestCaseLabel, bestCaseData, algorithmExplanation]
        }).catch(response =>{
            var labels = []
            var data = []
            labels.push("Almost In Order(Cancelled)")

            return [data, labels]
            
        })
    }
    getReverseOrder(listSize, buttonAlgorithm){

        return axios.get(DATA_REVERSE_ORDER.replace(/algName=&listSize=&buttonAlgorithm=/,  "algName=" + buttonAlgorithm + "&listSize=" + listSize + "&buttonAlgorithm=" + buttonAlgorithm), {
            cancelToken: source.token
        }).then(response => {
            var data = []
            var labels = []
            var avgCaseLabel, worstCaseLabel, bestCaseLabel
            var avgCaseData, worstCaseData, bestCaseData = []
             var algorithmExplanation = response.data["SortInfo"]
            data.push(response.data["Movements:"])
            data.push(response.data["Comparisons:"])
            data.push(response.data["Time:"])
            labels.push("Reverse Order")

            avgCaseLabel = response.data["AvgCase"]
            worstCaseLabel = response.data["WorstCase"]
            bestCaseLabel = response.data["BestCase"]

            avgCaseData = this.getCaseData(avgCaseLabel, 5)
            worstCaseData = this.getCaseData(worstCaseLabel, 5)
            bestCaseData = this.getCaseData(bestCaseLabel, 5)
            
            
           
            return [data,labels, avgCaseLabel, avgCaseData, worstCaseLabel, worstCaseData,
            bestCaseLabel, bestCaseData, algorithmExplanation]
        }).catch(response =>{
            var labels = []
            var data = []
            labels.push("Reverse Order(Cancelled)")

            return [data, labels]
            
        })
        
    }
    getRandomOrder(listSize, buttonAlgorithm){

        return axios.get(DATA_RANDOM_ORDER.replace(/algName=&listSize=&buttonAlgorithm=/,  "algName=" + buttonAlgorithm + "&listSize=" + listSize + "&buttonAlgorithm=" + buttonAlgorithm), {
           
                cancelToken: source.token

        }).then(response => {
            var data = []
            var labels = []
            var avgCaseLabel, worstCaseLabel, bestCaseLabel
            var avgCaseData, worstCaseData, bestCaseData = []
             var algorithmExplanation = response.data["SortInfo"]
            data.push(response.data["Movements:"])
            data.push(response.data["Comparisons:"])
            data.push(response.data["Time:"])
            labels.push("Random Order")
            
            avgCaseLabel = response.data["AvgCase"]
            worstCaseLabel = response.data["WorstCase"]
            bestCaseLabel = response.data["BestCase"]

            avgCaseData = this.getCaseData(avgCaseLabel, 5)
            worstCaseData = this.getCaseData(worstCaseLabel, 5)
            bestCaseData = this.getCaseData(bestCaseLabel, 5)
            
            
           
            return [data,labels, avgCaseLabel, avgCaseData, worstCaseLabel, worstCaseData,
            bestCaseLabel, bestCaseData, algorithmExplanation]
           
            
        }).catch(response =>{
            var labels = []
            var data = []
            labels.push("Random Order(Cancelled)")

            return [data, labels]
            
        })
    
    }
    getDataFormatted(data) {
        if(data !== undefined)
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    cancelRequests() {
        source.cancel()
        source = CancelToken.source()
        
    }

    getCaseData(equation, size) {

        var caseData = []

        parser.evaluate(equation)

            for(var i = 1; i <size+1; i+=1){

                caseData.push(parseFloat(parser.evaluate("f("+i+")")).toFixed(2))
                
            }

        return caseData
    }

}


export default new DataService();