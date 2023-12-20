function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode()
    let cur = head;
    let left = 0
    while (l1 !== null || l2 !== null) {
        const num1 = l1?.val ?? 0;
        const num2 = l2?.val ?? 0;
        const sum = num1 + num2 + left
        if (sum > 9) {
            const tens = Math.floor(sum / 10);
            left = tens;
            cur.val = sum - (tens * 10);
        } else {
            left = 0;
            cur.val = sum   
        }
        if (l1?.next || l2?.next) {
            cur.next = new ListNode()
            cur = cur.next
        }
        if (l1) {
            l1 = l1?.next
        }
        if (l2) {
            l2 = l2?.next
        }
    }
    if (left === 1) {
        cur.next = new ListNode()
        cur.next.val = 1
    }
    return head
};