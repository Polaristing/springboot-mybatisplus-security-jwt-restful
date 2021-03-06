package com.github.base.vo.manage;

import com.github.common.db.entity.primary.SysUnit;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotEmpty;
import java.util.LinkedHashMap;
import java.util.List;

public class SysUnitVO {
    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.DeleteOneReq")
    public static class DeleteOneReq {
        @ApiModelProperty(value = "id", example = "0")
        private Long id;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.InsertOneReq")
    public static class InsertOneReq  {
        @ApiModelProperty(value = "父id")
        private Long parentId;
        @ApiModelProperty(value = "名称")
        @NotEmpty(message = "名称不能为空")
        private String name;
        @ApiModelProperty(value = "类型")
        private String type;
        @ApiModelProperty(value = "排序")
        private Long indexNum;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.InsertOneRes")
    public static class InsertOneRes {
        @ApiModelProperty(value = "新增的组织结构id")
        private Long id;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.SelectOneReq")
    public static class SelectOneReq {
        @ApiModelProperty(value = "组织结构id")
        private Long id;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.SelectOneRes")
    public static class SelectOneRes {
        @ApiModelProperty(value = "组织结构对象")
        private SysUnit unit;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.SelectTreeReq")
    public static class SelectTreeReq {
        @ApiModelProperty(value = "排序<字段名,是正序>", example = "{'name':true}")
        private LinkedHashMap<String, Boolean> orderBy;
        @ApiModelProperty(value = "根节点id。不传此值或为null时，返回所有节点", example = "null")
        private Long rootId;
        @ApiModelProperty(value = "是否包含已删除节点", example = "false")
        private Boolean isDelete = false;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.SelectTreeRes")
    public static class SelectTreeRes {
        @ApiModelProperty(value = "组织结构树")
        private List<Object> unitTree;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.SelectListReq")
    public static class SelectListReq {
        @ApiModelProperty(value = "排序<字段名,是正序>", example = "{'name':true}")
        private LinkedHashMap<String, Boolean> orderBy;
        @ApiModelProperty(value = "根节点id。不传此值或为null时，返回所有节点", example = "null")
        private Long rootId;
        @ApiModelProperty(value = "是否包含已删除节点", example = "false")
        private Boolean isDelete = false;
    }

    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.SelectListRes")
    public static class SelectListRes {
        @ApiModelProperty(value = "组织结构表")
        private List<SysUnit> unitList;
    }

    @EqualsAndHashCode(callSuper = true)
    @Data
    @Accessors(chain = true)
    @ApiModel("UnitVO.UpdateOneReq")
    public static class UpdateOneReq extends InsertOneReq {
        @ApiModelProperty(value = "组织结构id")
        private Long id;
    }
}
