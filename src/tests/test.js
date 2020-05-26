import ErrorRepository  from '../js/app';

test("get correct error", ()=> {
    const someErrorRepository = new ErrorRepository();
    someErrorRepository.addError(1, "Ошибка 1");
    const result = someErrorRepository.translate(1);
    expect(result).toBe("Ошибка 1");
})

test("get uncorrect error", ()=> {
    const someErrorRepository = new ErrorRepository();
    someErrorRepository.addError(1, "Ошибка 1");
    const result = someErrorRepository.translate(2);
    expect(result).toBe('Unknown error');
})

