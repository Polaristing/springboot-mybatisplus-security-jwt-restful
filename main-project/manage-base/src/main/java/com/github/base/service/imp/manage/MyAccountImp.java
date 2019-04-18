package com.github.base.service.imp.manage;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.base.dto.manage.myaccount.MyAccountComparePasswordDTO;
import com.github.base.dto.manage.myaccount.MyAccountUpdatePasswordDTO;
import com.github.base.service.interf.manage.MyAccountService;
import com.github.common.db.entity.primary.manage.*;
import com.github.common.db.mapper.primary.manage.*;
import ma.glasnost.orika.MapperFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(rollbackFor = {Exception.class})
public class MyAccountImp extends ServiceImpl<UserMapper, User> implements MyAccountService {
    private final MapperFacade mapperFacade;
    private final UserMapper userMapper;

    @Autowired
    public MyAccountImp(UserMapper userMapper, MapperFacade mapperFacade) {
        this.userMapper = userMapper;
        this.mapperFacade = mapperFacade;
    }

    @Override
    public Boolean comparePassword(MyAccountComparePasswordDTO myAccountComparePasswordDTO) {
        User user = userMapper.selectById(myAccountComparePasswordDTO.getId());
        String userOldPassword = user.getPassword();
        String inputOldPassword = myAccountComparePasswordDTO.getOldPassword();
        return new BCryptPasswordEncoder().matches(inputOldPassword, userOldPassword);
    }

    @Override
    public Boolean updatePassword(MyAccountUpdatePasswordDTO myAccountUpdatePasswordDTO) {
        User user = new User();
        user.setId(myAccountUpdatePasswordDTO.getId());
        user.setPassword(myAccountUpdatePasswordDTO.getNewPassword());
        int resultNum = userMapper.updateById(user);
        return resultNum > 0;
    }


}