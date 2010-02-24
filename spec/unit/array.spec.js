describe 'Array'
  describe '#each()'
    it 'should be an alias of #forEach()'
      Array.prototype.each.should.equal Array.prototype.forEach
    end
  end

  describe '#includes()'
    it 'should indicate whether an array contains an item'
      ['test'].includes('test').should.be_true
      ['test'].includes('ok').should.be_false
    end

    it 'should indicate whether an array contains any of the items in a given array'
      [1,2,3,4,5].includes([1,2,3,4,5]).should.be_true
      [1,2,3,4,5].includes([1,2,3,4,5,6]).should.be_false
    end
  end

  describe '#first'
    it 'should equal the first element of the array'
      [1,2,3].first.should.equal 1
    end

    it 'should be possible to assign the value'
      a = [1,2,3]
      a.first = 4
      a[0].should.eql 4
    end
  end

  describe '#last'
    it 'should equal the last element of the array'
      [1,2,3].last.should.equal 3
    end

    it 'should be possible to assign the value'
      a = [1,2,3]
      a.last = 4
      a[2].should.eql 4
    end
  end
end
