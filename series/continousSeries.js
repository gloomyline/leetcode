/**
 * 题目描述：
 * 给一个正整数n，打印出所有的和为n的连续正整数序列，如果不存在则输出空。
 * 如：n=15，因为15=1+2+3+4+5=4+5+6=7+8则输出[1,2,3,4,5],[4,5,6],[7,8]
 */

class N {
	constructor () {
		this.n = arguments[0] || 0
		this.halfN = Math.ceil(this.n / 2)
		this.start = 0
		this.end = 0
		this.resInit = true
		this.listInclueStartAndEnd = []

		this.init()
	}

	init () {
		if (this.n < 0) {
			console.error('构造器参数必须是非负数')
			this.resInit = false
		}
		if (Math.floor(this.n) !== this.n) {
			console.error('构造器参数必须是整数')
			this.resInit = false
		}

		this.calcList()
	}

	calcList () {
		// if validation for the constructor arguments is not valid return
		if (!this.resInit) return

		let start = 1, end = 2
		let sum = start + end

		while(start <= this.halfN) {
			if (sum === this.n) {
				this.storeList(start, end)
			}
			while(sum < this.n) {
				end++
				sum+=end
				if(sum === this.n) {
					this.storeList(start, end)
				}
			}
			sum-=start
			start++
		}
	}

	storeList (start, end) {
		let listStartAndEnd = []
		listStartAndEnd.push(start, end)
		this.listInclueStartAndEnd.push(listStartAndEnd)
	}

	printResult () {
		let arr = this.listInclueStartAndEnd
		arr.forEach((val, ind) => {
			let start = val[0], end = val[1]
			let _arr = []
			for(let k = start;k <= end;k++) {
				_arr.push(k)
			}
			console.log(_arr)
		})
	}
}

let n = new N(15)
n.printResult()