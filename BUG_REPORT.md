# Bug Reports - SauceDemo

## BUG-01: Broken Images for Problem User
* **Severity:** Medium
* **Description:** When logged in as `problem_user`, product images on the inventory page fail to load (showing a broken placeholder).
* **Steps to Reproduce:**
  1. Login as `problem_user`.
  2. View the products on the main inventory page.
* **Expected Result:** High-quality product images should be displayed.
* **Actual Result:** All product images use the same broken link/placeholder.

## BUG-02: Missing "Remove" functionality for Error User
* **Severity:** High
* **Description:** When using `error_user`, clicking the "Remove" button on certain items in the cart does not update the UI or remove the item.
* **Steps to Reproduce:**
  1. Login as `error_user`.
  2. Add "Sauce Labs Backpack" to cart.
  3. Go to Cart and click "Remove".
* **Expected Result:** Item is removed and cart badge decreases.
* **Actual Result:** The item remains in the cart; the button click is ignored.