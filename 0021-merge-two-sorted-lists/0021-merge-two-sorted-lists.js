/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if(!list1) {
        return list2;
    }
    
    if(!list2) {
        return list1;
    }
    
    let l3 = {};
    let l1 = list1;
    let l2 = list2;
    
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        
        l3 = l3.next;
    }
    
    if(l1) {
        l3.next = l1;
    } else {
        l3.next = l2;
    }
    
    if(list1.val <= list2.val) {
        return list1;
    } else {
        return list2;
    }
}