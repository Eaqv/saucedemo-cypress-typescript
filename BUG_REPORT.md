# Bug Reports - SauceDemo

## BUG-01: Broken Product Images on Inventory Page
**Severity:** Medium  
**User(s) affected:** `problem_user`  
**Environment:** Chrome, Windows 11  

### Steps to Reproduce
1. Navigate to https://www.saucedemo.com
2. Login with username `problem_user` and password `secret_sauce`.
3. Observe the product images on the inventory page.

### Expected Result
Each product should display its unique and correct image.

### Actual Result
All products display a generic "dog" placeholder image or broken links.

### Evidence
[Link to GitHub Actions Artifacts - Video: purchase.cy.ts]

### Notes
This is a functional regression specific to the `problem_user` account. Standard users do not experience this.

---

## BUG-02: Unable to Remove Items from Cart
**Severity:** High  
**User(s) affected:** `error_user`  
**Environment:** Chrome, Windows 11  

### Steps to Reproduce
1. Login as `error_user`.
2. Add "Sauce Labs Backpack" to the cart.
3. Navigate to the Cart page.
4. Click the "Remove" button for the added item.

### Expected Result
The item should be removed from the list and the cart badge should update.

### Actual Result
The "Remove" button does not trigger any action; the item stays in the cart.

### Evidence
[See Screenshots folder in artifacts]

### Notes
The click event seems to be intercepted or blocked by an intentional application error for this user profile.