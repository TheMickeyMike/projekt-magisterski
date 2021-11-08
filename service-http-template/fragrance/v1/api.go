package v1

import (
	"net/http"

	"github.com/TheMickeyMike/projekt-magisterski/service-http-template/fragrance"
	"github.com/TheMickeyMike/projekt-magisterski/service-http-template/fragrance/errors"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	fragranceService fragrance.Service
}

func NewHandler(fragranceService fragrance.Service) *Handler {
	return &Handler{fragranceService}
}

// @Summary Get multiple fragrances
// @Produce json
// @Success 200 {object} models.Fragrances
// @Failure 500 {object} app.Response
// @Router /api/v1/fragrances [get]
func (h *Handler) ListFragrances(c *gin.Context) {
	ctx := c.Request.Context()

	opt := &fragrance.ListOptions{}

	fragrances, err := h.fragranceService.List(ctx, opt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, errors.InternalServerError)
		return
	}
	c.JSON(http.StatusOK, fragrances)
}
