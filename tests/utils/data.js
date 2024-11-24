export const users = [
    { username: 'problem_user', password: 'secret_sauce', expectedURL: 'https://www.saucedemo.com/inventory.html' },
    { username: 'performance_glitch_user', password: 'secret_sauce', expectedURL: 'https://www.saucedemo.com/inventory.html' },
    { username: 'error_user', password: 'secret_sauce', expectedURL: 'https://www.saucedemo.com/inventory.html' },
    { username: 'visual_user', password: 'secret_sauce', expectedURL: 'https://www.saucedemo.com/inventory.html' },
  ];
  
  export const scenarios = [ 
      { username: 'locked_out_user', password: 'secret_sauce', 
        expectedError: 'Epic sadface: Sorry, this user has been locked out.' },
  
      { username: 'problem_user', password: 'wrong_password', 
        expectedError: 'Epic sadface: Username and password do not match any user in this service' },
  
      { username: 'wrong_user', password: 'secret_sauce', 
        expectedError: 'Epic sadface: Username and password do not match any user in this service' },
  
      { username: 'wrong_user', password: 'wrong_password', 
        expectedError: 'Epic sadface: Username and password do not match any user in this service' },
  
      { username: '', password: 'secret_sauce', 
        expectedError: 'Epic sadface: Username is required' },
  
      { username: 'standard_user', password: '', 
        expectedError: 'Epic sadface: Password is required' },
  
      { username: '', password: '', 
        expectedError: 'Epic sadface: Username is required' },
      ]; 