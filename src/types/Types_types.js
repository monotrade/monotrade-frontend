//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TradeType = {
'NORMAL' : 1,
'HEDGING' : 4,
'ARBITRAGE' : 8,
'COVERED' : 16
};
PriceType = {
'LMT' : 0,
'BOC' : 1,
'BOP' : 2,
'ITC' : 3,
'B5TC' : 4,
'FOK' : 5,
'B5TL' : 6,
'ALO' : 7,
'ACO' : 8,
'ELO' : 9,
'SLO' : 10,
'FOK_LMT' : 11,
'EXE' : 12,
'MTL' : 13
};
Exchange = function(args) {
  this.name = null;
  this.code = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.code !== undefined) {
      this.code = args.code;
    }
  }
};
Exchange.prototype = {};
Exchange.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.code = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Exchange.prototype.write = function(output) {
  output.writeStructBegin('Exchange');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.STRING, 2);
    output.writeString(this.code);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Bar = function(args) {
  this.symbol = null;
  this.timestamp = null;
  if (args) {
    if (args.symbol !== undefined) {
      this.symbol = args.symbol;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
  }
};
Bar.prototype = {};
Bar.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.symbol = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Bar.prototype.write = function(output) {
  output.writeStructBegin('Bar');
  if (this.symbol !== null && this.symbol !== undefined) {
    output.writeFieldBegin('symbol', Thrift.Type.STRING, 1);
    output.writeString(this.symbol);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 2);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Trade = function(args) {
  this.symbol = null;
  if (args) {
    if (args.symbol !== undefined) {
      this.symbol = args.symbol;
    }
  }
};
Trade.prototype = {};
Trade.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.symbol = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Trade.prototype.write = function(output) {
  output.writeStructBegin('Trade');
  if (this.symbol !== null && this.symbol !== undefined) {
    output.writeFieldBegin('symbol', Thrift.Type.STRING, 1);
    output.writeString(this.symbol);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Position = function(args) {
  this.symbol = null;
  if (args) {
    if (args.symbol !== undefined) {
      this.symbol = args.symbol;
    }
  }
};
Position.prototype = {};
Position.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.symbol = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Position.prototype.write = function(output) {
  output.writeStructBegin('Position');
  if (this.symbol !== null && this.symbol !== undefined) {
    output.writeFieldBegin('symbol', Thrift.Type.STRING, 1);
    output.writeString(this.symbol);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Portfolio = function(args) {
};
Portfolio.prototype = {};
Portfolio.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Portfolio.prototype.write = function(output) {
  output.writeStructBegin('Portfolio');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Account = function(args) {
};
Account.prototype = {};
Account.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Account.prototype.write = function(output) {
  output.writeStructBegin('Account');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Order = function(args) {
  this.symbol = null;
  if (args) {
    if (args.symbol !== undefined) {
      this.symbol = args.symbol;
    }
  }
};
Order.prototype = {};
Order.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.symbol = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Order.prototype.write = function(output) {
  output.writeStructBegin('Order');
  if (this.symbol !== null && this.symbol !== undefined) {
    output.writeFieldBegin('symbol', Thrift.Type.STRING, 1);
    output.writeString(this.symbol);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Transaction = function(args) {
  this.symbol = null;
  if (args) {
    if (args.symbol !== undefined) {
      this.symbol = args.symbol;
    }
  }
};
Transaction.prototype = {};
Transaction.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.symbol = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Transaction.prototype.write = function(output) {
  output.writeStructBegin('Transaction');
  if (this.symbol !== null && this.symbol !== undefined) {
    output.writeFieldBegin('symbol', Thrift.Type.STRING, 1);
    output.writeString(this.symbol);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

