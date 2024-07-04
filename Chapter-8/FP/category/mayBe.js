const mayBe = (value) => ({
    value,
    isNull() {
      return value == null || value == undefined;
    },
    //apply coming func with value in container and return the container
    map(fn) {
      return this.isNull()? mayBe.of(null): mayBe.of(fn(value));
    },
    valueOf() {
      return value;
    },
  });
  mayBe.of = mayBe;