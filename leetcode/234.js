// Space(1)
var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
        var slow = head;
        var fast = head;
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow.next = reverseList(slow.next);
        slow = slow.next;
        while(slow != null) {
            if(head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
};

var reverseList = function(head) {
        var pre = null;
        var next = null;
        while(head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
};

// Space(N)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const stash = []
    let cur = head
    while (cur !== null) {
        stash.push(cur.val)
        cur = cur.next
    }
    let left = 0;
    let right = stash.length -1
    while (left < right) {
        if (stash[left] !== stash[right]) {
            return false
        }
        left++
        right--
    }
    return true
    
};