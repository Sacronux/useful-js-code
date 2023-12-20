/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left >= right) {
        return head
    }
    let beforeLeftNode = null
    let leftNode = null
    let reversed = null;
    let reversedCur = reversed;
    let i = 1;
    let cur = head;

    while (cur !== null) {
        if (i === 1 && i !== left) {
            beforeLeftNode = cur
        }

        if (i === left) {
            leftNode = cur;
            reversed = cur;
            reversedCur = reversed;
            cur = cur.next;
            leftNode.next = null
            i++;
        } else if (i > left && i < right) {
            const savedCur = cur.next;
            cur.next = reversedCur;
            reversedCur = cur;
            cur = savedCur

            i++
        } else if (i === right) {
            const savedCur = cur.next;
            cur.next = reversedCur;
            if (beforeLeftNode) {
                beforeLeftNode.next = cur

            }
            if (savedCur !== null) {
                reversedCur = cur;

                cur = savedCur
            } else {
                
                if (beforeLeftNode === null) {
                    head = cur
                }
                return head
            }
            i++
        } else {
            if (i === left - 1) {
                beforeLeftNode = cur
            }
            if (i === right + 1) {
                leftNode.next = cur
            }
            cur = cur.next
            i++
        }
    }

    if (left === 1) {
        return reversedCur
    }
    return head
};