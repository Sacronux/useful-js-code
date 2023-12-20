class ListNode {
    constructor(val, prev = null, next = null) {
        this.val = val
        this.prev = prev
        this.next = next
    }
}

class BrowserHistory {
    constructor(homepage) {
        this.head = new ListNode(homepage);
        this.cur = this.head;
    }

    visit(url) {
        this.head = new ListNode(url, null, this.cur)
        this.cur.prev = this.head;
        this.cur = this.head;
        // console.log({ head: this.head })
        // console.log('visit', this.cur, this.cur.val, this.cur.next.val)
        return null;
    }

    back(steps) {
        let i = 1;
        // console.log('init', steps, this.cur.val, this.cur.next?.val)
        while (i <= steps) {
            if (this.cur.next !== null) {
                // console.log(true, i, { back: this.cur })

                this.cur = this.cur.next
                i++
            } else {
                // console.log(i, { back: this.cur })
                return this.cur.val;
            }
        }
        // console.log({ back: this.cur.val })
        return this.cur.val
    }

    forward(steps) {
        let i = 1;
        while (i <= steps) {
            if (this.cur.prev !== null) {
                this.cur = this.cur.prev
                i++
            } else {
                return this.cur.val;
            }
        }
        return this.cur.val
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

const b = new BrowserHistory('leetcode.com')
const s1 = ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
const s2 = [["leetcode.com"], ["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
console.log(b.head)
s1.forEach((action, i) => {
    if (b[action]) {
      console.log(b[action](s2[i][0]));
    }
  });
