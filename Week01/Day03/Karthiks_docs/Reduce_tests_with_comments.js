it('should reduce the array\'s contents to a single value', () => {
      const arr = [6, 1, 2, 3, 4, 5];
      const result = arrayMethods.reduce(arr, (memo, num) => (memo + num));
      expect(result).toBe(15);

      // incorrect version (double counting):
      // memo = 1
      // cb(1, 1) => 2
      // memo = 2
      // cb(2, 2) => 4
      // memo = 4
      // cb(4, 3) => 7
      // memo = 7
      // cb(7, 4) => 11
      // memo = 11
      // cb(11, 5) => 16
      // 16

      // correct version:
      // memo = 1
      // cb(1, 2) => 3
      // memo = 3
      // cb(3, 3) => 6
      // memo = 6
      // cb(6, 4) => 10
      // memo = 10
      // cb(10, 5) => 15
      // 15
    });
    it('should accept a memo argument', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = arrayMethods.reduce(arr, (memo, num) => (memo + num), 10);
      expect(result).toBe(25);

      // memo = 10
      // cb(10, 1) => 11
      // memo = 11
      // cb(11, 2) => 13
      // memo = 13
      // cb(13, 3) => 16
      // memo = 16
      // cb(16, 4) => 20
      // memo = 20
      // cb(20, 5) => 25
      // memo = 25
      // 25 is the return value
    });