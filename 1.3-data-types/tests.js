describe('Домашнее задание к занятию 1.3 «Типы данных»', () => {
  describe('Задача №1, должна верно считать кредит', () => {
    it('кейс #1', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      expect(calculateTotalMortgage(10, 0, 50000, nextYearDate)).toEqual(52749.53);
    });

    it('кейс #2', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      expect(calculateTotalMortgage(10, 1000, 50000, nextYearDate)).toEqual(51694.54);
    });

    it('кейс #3', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 4));
      expect(calculateTotalMortgage(10, 20000, 20000, nextYearDate)).toEqual(0);
    });

    it('кейс #4', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      expect(calculateTotalMortgage(10, 0, 10000, nextYearDate)).toEqual(11616.19);
    });

    it('кейс #5', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      expect(calculateTotalMortgage(15, 0, 10000, nextYearDate)).toEqual(12479.52);
    });
  });

  describe('Задача №2 должна верно приветствовать', () => {
    it('анонима при незаданном имени ', () => {
      expect(getGreeting()).toEqual("Привет, мир! Меня зовут Аноним");
    });

    it('анонима при отсутствующем имени ', () => {
      expect(getGreeting(null)).toEqual("Привет, мир! Меня зовут Аноним");
    });

    it('анонима при имени равном пустой строке', () => {
      expect(getGreeting("")).toEqual("Привет, мир! Меня зовут Аноним");
    });

    it('пользователя при известном имени', () => {
      expect(getGreeting("Пётр")).toEqual("Привет, мир! Меня зовут Пётр");
    });
  });
});