module.exports = {
    getFlag: function getFlag(flag) {
        if (flag == process.argv[2]) {
            return process.argv[3]
        } else if (flag == process.argv[4]) {
            return process.argv[5]
        } else {
            throw new Error('flag não encontrada')
        }
    },
    module2: function getFlagValue(flag) {
        const index = process.argv.indexOf(flag) + 1      
        if (flag == process.argv[index - 1]) {
            return process.argv[index]
        } else {
            throw new Error('flag não encontrada')
        }
    },
}
module.exports = class flags {
    constructor(flag) {
      this.flag = flag
    };
  
    getFlag() {
      if (this.flag == process.argv[2]) {
      return process.argv[3]
      } else if (this.flag == process.argv[4]) {
        return process.argv[5]
      } else {
        throw new Error('Não temos essa flag no momento')
      }
    };
    getFlagValue(flag) {
      const index = precess.argv[flag] + 1
      if (flag == precess.argv[index] - 1) {
        return index
      } else {
        throw new Error('Não temos essa flag no momento')
      }
    };
  
  };